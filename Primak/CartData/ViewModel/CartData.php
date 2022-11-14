<?php

declare(strict_types=1);

namespace Primak\CartData\ViewModel;

use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\View\Element\Block\ArgumentInterface;
use Magento\Store\Model\StoreManagerInterface;


/**
 * class CartData
 */
class CartData implements ArgumentInterface
{
    /**
     * @var StoreManagerInterface
     */
    protected StoreManagerInterface $storeManager;

    /**
     * @param StoreManagerInterface $storeManager
     */
    public function __construct(
        StoreManagerInterface $storeManager

    ){
        $this->storeManager = $storeManager;
    }

    /**
     * @return string
     * @throws NoSuchEntityException
     */
    public function getCurrentCurrencyCode(): string
    {
        return $this->storeManager->getStore()->getCurrentCurrencyCode();
    }
}
